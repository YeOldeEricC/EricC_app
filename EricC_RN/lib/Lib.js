// imports as they will be needed
import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Eqn from './Eqn';
import { colour } from './Colours';
import { article, ref, eqn } from './PresetStyles';

// generates randomised string of length: 'len'
export function gen_id(len) {
	var ID = Math.random().toString(36).substr(2,len);
	console.log('ID: ' + ID);
	return ID;
}


// OPENER/LOADER, PARSER AND CONVERTER FOR FORMATTED TXT/JSON FILES

/* Notes + info for the text file formatting & manipulation

## TXT FILE TAGSET ##
DOC = [? ... ?] // document tag -- this is only a maybe, might not need it
MAJ = [# ... #] // major tag
COM = [- ... -] // comment tag -- haven't yet implmented any need of it
MIN = [= ... =] // minor/detail tag

## MAJOR TAGS ##
TTL 			- title
HDR 			- header
TXT 			- text
EQN 			- equation
REF 			- references
PLT 			- plot
IMG 			- image
CODE 			- code (monospaced font)
CODE/LANG 		- code w/ syntax highlighting for language

END 			- end of article

AUTH 			- author article was written by
DATE 			- date of article writing -- date follows author name
SEARCH_TERMS 	- relevent search terms of article -- these at the end

________________________________________________________ 
-- note: all above END are 'within' article tags, rest 	|
--       are for authoring info and search parameters. 	|
--														|
--   so: if END used in wrong place, need to produce 	|
--       an error message saying as such.				|
________________________________________________________|

## MINOR/DETAIL TAGS ##
PS 				- paragraph separator

*/


export class Txt_loader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fname: this.props.fname,
		};
		this.componentDidMount = this.componentDidMount.bind(this);
		this.ld_json = this.ld_json.bind(this);
		this.tag_parse = this.tag_parse.bind(this);
	}

	componentDidMount() {
		console.log(' ');
		this.tag_parse();
		console.log(' ');
	}

	ld_json() {
		let json_in = require('../tmp/test.json');
		return json_in.text;
	}

	tag_parse() {
		// import tag set
		let tagset = require('./tagset.json');
		// load the text to convert
		let txt = this.ld_json();

		// separate the tag types
		let tags = tagset.tag_types;
		let majs = tagset.MAJ;
		let mins = tagset.MIN;
	
		//let doc_tag_s = tags.T_S + tags.DOC + tags.SEP;
		//let doc_tag_e = tags.SEP + tags.DOC + tags.T_E;

		// MAJOR tag tags built from config, then used for splitting text
		let maj_tag_s = tags.T_S + tags.MAJ + tags.SEP;
		let maj_tag_e = tags.SEP + tags.MAJ + tags.T_E;

		// MINOR tag tags built from config, then used for splitting text
		let min_tag_s = tags.T_S + tags.MIN + tags.SEP;
		let min_tag_e = tags.SEP + tags.MIN + tags.T_E;

		let major_comps = [];
		let tmp0 = txt.split(maj_tag_s);
		let i = 0; // iterator vars
		let j = 0;
		for (i = 0; i < tmp0.length; i++) {
			let tmp1 = tmp0[i].split(maj_tag_e);
			if (tmp1[0] != "") {
				major_comps.push(tmp1)
			}
		}
		//console.log(major_comps);

		// tmp vars for the loop
		let comp_arr = new Array();
		var typ = '';
		var content = '';
		var ended = false; // if article has ended or not

		// vars used for the paragraphs in the TXT tag
		var par_sep = '';
		var pars = [];
		
		let key_id = 0;
		for (i = 0; i < major_comps.length; i++) {
			typ = major_comps[i][0];
			content = major_comps[i][1];
			//console.log(key_id)
			switch(typ) {
				case majs.title:
					//console.log(typ,content);
					comp_arr[key_id] = <Text style={article.TTL} key={key_id}>{content}</Text>;
					key_id += 1; 
					break;

				case majs.header:
					//console.log(typ,content);
					comp_arr[key_id] = <Text style={article.HDR} key={key_id}>{content}</Text>;
					key_id += 1; 
					break;

				case majs.text:
					//console.log(typ,content);
					par_sep = min_tag_s + mins.para_sep + min_tag_e;
					pars = content.split(par_sep);
					for (j = 0; j < pars.length; j++) {
						comp_arr[key_id] = <Text style={article.TXT} key={key_id}>{pars[j]}</Text>;
						key_id += 1; 
					}
					break;

				case majs.equation:
					//console.log(typ,content);
					comp_arr[key_id] = <Eqn key={key_id} eqn={content}/>;
					key_id += 1; 
					break;

				case majs.code:
					comp_arr[key_id] = <Text style={article.CODE} key={key_id}>{content}</Text>;
					key_id += 1;
					break;

				// below cases are done
				case majs.end:
					comp_arr[key_id] = <View key={key_id} style={article.END}/>;
					key_id += 1;
					ended = true;
					break;

				case majs.author:
					//console.log(typ,content);
					if (ended == false) {
						break;
					}
					else {
						comp_arr[key_id] = <Text style={article.AUTH} key={key_id}>{content}</Text>;
						key_id += 1;
					}
					break;

				case majs.date:
					//console.log(typ,content);
					if (ended == false) {
						break;
					}
					else {
						comp_arr[key_id] = <Text style={article.DATE} key={key_id}>{content}</Text>;
						key_id += 1;
					}
					break;
			}
		}
		return comp_arr;

	}

	vaild_date(date) {
		// date comes in and should be dd/mm/yyyy
		// => date[0] + date[1] <= 31
		// => date[3] + date[4] <= 12
		// year must be 4 digits long

		return 0;
	}

	render() {
		return(
			<View>
				{this.tag_parse()}
			</View>
		)
	}

}
