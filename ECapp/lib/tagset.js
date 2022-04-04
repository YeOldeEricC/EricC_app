const tagset = {
	tag_types: {
		T_S: "[",
		T_E: "]",
		COM: "-",
		DOC: "?",
		MAJ: "#",
		MIN: "=",
		SEP: " "
	},
	DOC: {
		tmp: "..."
	},
	MAJ: {
		title: "TTL",
		header: "HDR",
		text: "TXT",
		equation: "EQN",
		references: "REF",
		plot: "PLT",
		image: "IMG",
		code: "CODE",
		code_w_lang: "CODE/",
		end: "END",
		author: "AUTH",
		date: "DATE",
		search_terms: "SEARCH_TERMS"
	},
	MIN: {
		para_sep: "PS"
	}
};

export default tagset;