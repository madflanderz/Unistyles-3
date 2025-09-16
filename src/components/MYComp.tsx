import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const MYComp = () => {
  return <View style={styles.container}>
    <Text>MYComp</Text>
  </View>
}

const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors.primary,
  },
}));