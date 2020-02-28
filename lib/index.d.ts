import React from 'react';
import { ScrollViewProps, ViewProps } from 'react-native';
declare type Item = any;
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
declare const ModernFeed: React.FC<Props & ScrollViewProps>;
export default ModernFeed;
