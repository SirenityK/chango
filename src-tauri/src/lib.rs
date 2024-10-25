// dardo
#[tauri::command]
fn calc_x(v_0: f32, alpha: f32, t: f32) -> f32 {
    v_0 * t * alpha.cos()
}

// dardo
#[tauri::command]
fn calc_y(v_0: f32, alpha: f32, t: f32, g: f32) -> f32 {
    v_0 * t * alpha.sin() - 0.5 * g * t.powi(2)
}

#[tauri::command]
fn monkey_y(h: f32, g: f32, time: f32) -> f32 {
    h - g * time.powi(2) / 2.0
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

#[tauri::command]
fn parabolic_trajectory(v_0: f32, alpha: f32, t: f32, g: f32) -> (f32, f32) {
    let x = calc_x(v_0, alpha, t);
    let y = calc_y(v_0, alpha, t, g);
    (x, y)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            calc_x,
            calc_y,
            angle_to_radians,
            atan2,
            calc_time,
            monkey_y,
            parabolic_trajectory
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
