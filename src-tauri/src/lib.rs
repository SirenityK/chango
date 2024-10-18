// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

#[tauri::command]
fn calc_x(v_0: f32, alpha: f32, t: f32) -> f32 {
    v_0 * t * alpha.cos()
}

#[tauri::command]
fn calc_y(v_0: f32, alpha: f32, t: f32) -> f32 {
    v_0 * t * alpha.sin() - 0.5 * 9.81 * t.powi(2)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![calc_x, calc_y])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
