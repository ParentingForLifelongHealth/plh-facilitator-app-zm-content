import { extendDeploymentConfig } from "scripts";
const config = extendDeploymentConfig({ name: "plh_facilitator_zm", parent: "plh_facilitator" });

config.google_drive.sheets_folder_ids =  ["1k8zJfBeOm18gYDsk0XmdUm7OFtZDUY9R", "1bdyRi0SsfuuMuh5vpRr5ixGh6xrBOYEn"];
config.google_drive.assets_folder_ids = ["1KcHDI7O4o2_FZ_YlXsz-8OqN3ehsfdVf", "1vP339DiDR4R-3q_goOYBl2wpVYP5yBoo"];

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-facilitator-app-zm-content.git",
  content_tag_latest: "1.1.32",
};

config.android = {
  app_id:'international.idems.plh_facilitator_zm',
  app_name:'HHPP Yanga',
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.web.favicon_asset = "images/logos/hhpp_yanga_logos_icon_colour.svg";
config.api.db_name = "plh_facilitator_zm"

// Hacky fix to point extended deployment to content within its own repo
config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "HHPP Yanga";
config.app_config.APP_HEADER_DEFAULTS.title = "HHPP Yanga";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from HHPP Yanga";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from HHPP Yanga";

config.error_logging = { dsn: "https://cd3bdbb9bb46433ca6969c7a775206ac@app.glitchtip.com/5661"};

export default config;

