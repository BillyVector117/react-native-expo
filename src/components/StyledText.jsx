import { StyleSheet, Text } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: { fontWeight: theme.fontWeights.bold },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    textAlignCenter: {
        textAlign: 'center'
    }

})

const StyledText = ({ children, align, color, fontSize, fontWeight, style, ...rest }) => {
    const textStyles = [
        styles.text, // "default props"
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style
    ]
    return (
        <Text style={textStyles} {...rest}>{children}</Text>
    )
}

export default StyledText