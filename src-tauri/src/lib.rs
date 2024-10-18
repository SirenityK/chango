// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

const G: f32 = 9.81;

#[tauri::command]
fn calc_x(v_0: f32, alpha: f32, t: f32) -> f32 {
    v_0 * t * alpha.cos()
}

#[tauri::command]
fn calc_y(v_0: f32, alpha: f32, t: f32) -> f32 {
    v_0 * t * alpha.sin() - 0.5 * G * t.powi(2)
}

#[tauri::command]
fn angle_to_radians(angle: f32) -> f32 {
    angle * std::f32::consts::PI / 180.0
}

#[tauri::command]
fn atan2(y: f32, x: f32) -> f32 {
    y.atan2(x)
}

#[tauri::command]
fn calc_time(x_m: f32, v_0: f32, alpha: f32) -> f32 {
    x_m / (v_0 * alpha.cos())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            calc_x,
            calc_y,
            angle_to_radians,
            atan2,
            calc_time
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
