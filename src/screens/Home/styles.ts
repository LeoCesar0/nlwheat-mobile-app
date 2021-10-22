import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight() + 20,
        backgroundColor: COLORS.BLACK_SECONDARY
    }

})