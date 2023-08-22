import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("plh_facilitator_zm");

/**
 * The default config should ideally be a superset of any extended configs
 * to allow for easier post-processing
 */

config.google_drive = {
  sheets_folder_id: "1bdyRi0SsfuuMuh5vpRr5ixGh6xrBOYEn",
  assets_folder_id: "1vP339DiDR4R-3q_goOYBl2wpVYP5yBoo",
};

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-facilitator-app-zm-content.git",
  content_tag_latest: "1.1.12",
};

config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Implementer App";
config.app_config.APP_HEADER_DEFAULTS.title = "Implementer App";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from Implementer App";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from Implementer App";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";

export default config;
