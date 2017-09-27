import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <Button
                    title="Onwards!"
                    raised
                    buttonStyle={styles.button}
                    onPress={this.props.onComplete}
                />
            );
        }
        return null;
    }

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View
                    key={slide.text}
                    style={[styles.slide, { backgroundColor: slide.color }]}
                >
                    <Text style={styles.text}>{slide.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            );
        });
    }

    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                style={{ flex: 1 }}
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff'
    },
    slide: {
        flex: 1,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#0288D1',
        marginTop: 15,

    }
};

export default Slides;