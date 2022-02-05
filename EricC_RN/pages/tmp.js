import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Dimensions, Platform } from 'react-native';
import { colour } from '../Colours';

class TMP extends Component {
	constructor() {
		super();
		this.state = {
			SCREEN_W: Dimensions.get('window').width,
			SCREEN_H: Dimensions.get('window').height,
			PLATF_OS: Platform.OS,
		}
		this.styles = StyleSheet.create({
			test: {

			},
		});
		this.componentDidMount = this.componentDidMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.update_dims = this.update_dims.bind(this);
	}
	componentDidMount() {
		this.interval = setInterval(() => this.update_dims(), 1000/60);
	}
	
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	
	// Specifically for web as user may resize the window
	// so, not needed if an app as cannot resize.
	update_dims() {
		let NEW_H = Dimensions.get('window').height;
		let NEW_W = Dimensions.get('window').width;
		if (NEW_H != this.state.SCREEN_H) {
			this.setState({SCREEN_H: NEW_H});
		}
		if (NEW_W != this.state.SCREEN_W) {
			this.setState({SCREEN_W: NEW_W});
		}
		//console.log(this.state.SCREEN_H,this.state.SCREEN_W);
	}

	render() {
		return(
			<ScrollView style={{
				backgroundColor: colour.dark,
				paddingHorizontal: 16,
				paddingTop: 16,
			}}>
				<View style={{
					justifyContent: 'center',
					alignContent: 'center',
					alignItems: 'center',
				}}>
					<Text style={{
						color: colour.light,
						//font
					}}>
						TMP PAGE
					</Text>
				</View>
			</ScrollView>
		)
	}
}

export { TMP };