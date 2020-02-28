import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ScrollViewProps,
  ViewProps,
} from 'react-native';

const styles = StyleSheet.create({
  mainCard: {
    height: 280,
    zIndex: 10,
  },
});

type Item = any;

interface Props {
  data: Item[];
  mainCardStyle?: ViewProps['style'];
  listContainerStyle?: ViewProps['style'];
  footerContainerStyle?: ViewProps['style'];
  underCardContainerStyle?: ViewProps['style'];
  keyExtractor: (item: Item, index: number) => string;
  renderMainCard: (item: Item) => JSX.Element;
  renderUnderCard: (item: Item) => JSX.Element;
  renderFooter: (item: Item) => JSX.Element | null;
}

const ModernFeed: React.FC<Props & ScrollViewProps> = ({
  data,
  keyExtractor,
  renderFooter,
  renderMainCard,
  renderUnderCard,
  mainCardStyle,
  listContainerStyle,
  footerContainerStyle,
  underCardContainerStyle,
  ...props
}) => {
  const [stickyHeaderIndices, setStickyHeaderIndices] = useState<number[]>([]);

  useEffect(() => {
    const indices = data.reduce(
      (acc: number[], _item: JSX.Element, index: number) => {
        return [...acc, index * 3, index * 3 + 2];
      },
      [],
    );

    setStickyHeaderIndices(indices);
  }, [data, data.length]);

  return (
    <ScrollView
      {...props}
      style={listContainerStyle}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={stickyHeaderIndices}>
      {data.map((item: Item, index: number) => {
        const key = keyExtractor(item, index);
        return [
          <View
            key={`${key}-0`}
            style={StyleSheet.flatten([styles.mainCard, mainCardStyle])}>
            {renderMainCard(item)}
          </View>,

          <View key={`${key}-1`} style={underCardContainerStyle}>
            {renderUnderCard(item)}
          </View>,

          <View key={`${key}-2`} style={footerContainerStyle}>
            {renderFooter(item)}
          </View>,
        ];
      })}
    </ScrollView>
  );
};

ModernFeed.defaultProps = {
  mainCardStyle: {},
  listContainerStyle: {},
  footerContainerStyle: {},
  underCardContainerStyle: {},
  renderFooter: () => null,
};

export default ModernFeed;
