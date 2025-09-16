# Unistyles example that fails to build

Error:

```
Route "./(tabs)/index.tsx" is missing the required default export. Ensure a React component is exported as default.
 ERROR  [Error: Unistyles is not initialized correctly. Please add babel plugin to your babel config.] 

Code: MYComp.tsx
   8 | }
   9 |
> 10 | const styles = StyleSheet.create((theme) => ({
     |                                 ^
  11 |   container: {
  12 |     backgroundColor: theme.colors.primary,
  13 |   },
Call Stack
  <global> (src/components/MYComp.tsx:10:33)

```


run this to see the error:

```
npm install
npm run android
```
