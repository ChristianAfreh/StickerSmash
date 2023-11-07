import  MaterialIcons  from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, Pressable } from 'react-native';


export default function IconButton({icon,label,onPress}) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color="#fff" />
        <Text style={styles.IconButtonLabel}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconButtonLabel: {
        color: '#fff',
        marginTop: 12,
    }
});