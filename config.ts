import { extendDeploymentConfig } from "scripts";
const config = extendDeploymentConfig({ name: "plh_facilitator_zm", parent: "plh_facilitator" });

// override app constants here
config.app_config.APP_HEADER_DEFAULTS.title = "Implementer App";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Implementer App";

// example filters applied to main deployment content
config.app_data.sheets_filter_function = (flow) =>true,
config.app_data.assets_filter_function = (fileEntry) =>true

export default config;