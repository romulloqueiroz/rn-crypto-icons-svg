# rn-crypto-icons-svg

Crypto Icons in SVG for React Native (450+ tokens)
---
<img src="coins.png" />

## Installation

```sh
yarn add rn-crypto-icons-svg
```

## Usage

Just import it and use it like any other React Native component.
Shapes can be'circle', 'square', 'octagonal', and 'hexagonal'.

```js
import Crypto from 'rn-crypto-icons-svg'

// ...

export default function App() {
  return (
    <View style={styles.container}>
      <Crypto name='UST' size={200} shape='octagonal' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
```

## License

MIT

---

