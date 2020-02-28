[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# react-native-modern-feed
An elegant UI component for content feed.

---

![Image of modern feed in action](./assets/modernFeed.gif)

# Usage

## Installation

```javascript
$ yarn add react-native-modern-feed
```

## In your code

```jsx
import ModernFeed from "react-native-modern-feed";

const App = () => (
  <ModernFeed
    data={feedData}
    keyExtractor={item => `${item._id}`}
    renderMainCard={renderMainCard}
    renderUnderCard={renderUnderCard}
    renderFooter={renderFooter}
  />
);
```
