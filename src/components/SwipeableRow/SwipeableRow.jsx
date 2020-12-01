import React from 'react';
import { StyleSheet, View, I18nManager, Text } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

const SwipeableRow = ({ children }) => {
    const styles = StyleSheet.create({
        actionText: {
            color: 'white',
            fontSize: 16,
            backgroundColor: 'transparent',
            padding: 10,
        },
        rightAction: {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
        },
    });
    let _swipeableRow;
    const updateRef = (ref) => {
        _swipeableRow = ref;
    };
    const close = () => {
        _swipeableRow.close();
    };

    const renderRightAction = (text, color, x, progress) => {
        const pressHandler = () => {
            close();
        };
        return (
            <View style={{ flex: 1, transform: [{ translateX: 0 }] }}>
                <RectButton
                    style={[styles.rightAction, { backgroundColor: color }]}
                    onPress={pressHandler}>
                    <Text style={styles.actionText}>{text}</Text>
                </RectButton>
            </View>
        );
    };

    const renderRightActions = (progress) => (
        <View
            style={{
                width: 80,
                flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
            }}>
            {renderRightAction('Delete', '#dd2c00', 64, progress)}
        </View>
    );

    return (
        <Swipeable
            ref={updateRef}
            friction={2}
            rightThreshold={60}
            renderRightActions={renderRightActions}
        >
            {children}
        </Swipeable>
    )
};

export default SwipeableRow;
