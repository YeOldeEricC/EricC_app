// tmp file is for testing out components, functions and other stuff

import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Dimensions, Platform } from 'react-native';
import { colour } from '../lib/Colours';
import Eqn from '../lib/Eqn';

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
	}


	render() {
		return(
			<ScrollView style={{
				backgroundColor: colour.dark,
				paddingHorizontal: this.state.PLATF_OS == 'web' ? 64 : 24,
				paddingVertical: this.state.PLATF_OS == 'web' ? 32 : 16,
			}}>
				<View style={{
					justifyContent: 'center',
					alignContent: 'center',
					alignItems: 'center',
					paddingBottom: 32,
				}}>
					<Eqn
						ver={this.state.PLATF_OS}
						eqn='x=y'
					/>
					<Text style={{
						color: colour.light,
						textAlign: 'justify',
						//font
					}}>
						TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE TMP PAGE
					</Text>
				</View>
			</ScrollView>
		)
	}
}

export { TMP };