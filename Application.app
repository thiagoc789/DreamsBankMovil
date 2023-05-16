{
	"_Name": "DreamsBank",
	"Version": "/DreamsBank/Globals/AppDefinition_Version.global",
	"MainPage": "/DreamsBank/Pages/Main.page",
	"OnLaunch": [
		"/DreamsBank/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/DreamsBank/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/DreamsBank/Actions/Service/InitializeOnline.action",
	"Styles": "/DreamsBank/Styles/Styles.less",
	"Localization": "/DreamsBank/i18n/i18n.properties",
	"_SchemaVersion": "23.4"
}