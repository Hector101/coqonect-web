module.exports = {
	presets: [
		"next/babel"
  ],
	plugins: [
		"inline-react-svg",
		"@babel/plugin-proposal-optional-chaining",
		"@babel/plugin-proposal-nullish-coalescing-operator",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
		["@babel/plugin-proposal-class-properties", { "loose": true }]
	]
}
