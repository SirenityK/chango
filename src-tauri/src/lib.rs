#[cfg(debug_assertions)]
use specta_typescript::Typescript;
use tauri_specta::{collect_commands, Builder};

// dardo
#[tauri::command]
#[specta::specta]
fn calc_x(v_0: f32, alpha: f32, t: f32) -> f32 {
    v_0 * t * alpha.cos()
}

// dardo
#[tauri::command]
#[specta::specta]
fn calc_y(v_0: f32, alpha: f32, t: f32, g: f32) -> f32 {
    v_0 * t * alpha.sin() - 0.5 * g * t.powi(2)
}

#[tauri::command]
#[specta::specta]
fn monkey_y(h: f32, g: f32, time: f32) -> f32 {
    h - g * time.powi(2) / 2.0
}

#[tauri::command]
#[specta::specta]
fn angle_to_radians(angle: f32) -> f32 {
    angle * std::f32::consts::PI / 180.0
}

#[tauri::command]
#[specta::specta]
fn atan2(y: f32, x: f32) -> f32 {
    y.atan2(x)
}

#[tauri::command]
#[specta::specta]
fn calc_time(x_m: f32, v_0: f32, alpha: f32) -> f32 {
    x_m / (v_0 * alpha.cos())
}

#[tauri::command]
#[specta::specta]
fn current_dardo_speed(v0: f32, alpha: f32, t: f32, g: f32) -> f32 {
    let vx = v0 * alpha.cos();
    let vy = v0 * alpha.sin() - g * t;
    (vx.powi(2) + vy.powi(2)).sqrt()
}

#[tauri::command]
#[specta::specta]
fn current_mono_speed(v0: f32, g: f32, t: f32) -> f32 {
    v0 - g * t
}

// #[tauri::command]
// fn parabolic_trajectory(v_0: f32, alpha: f32, t: f32, g: f32) -> (f32, f32) {
//     let x = calc_x(v_0, alpha, t);
//     let y = calc_y(v_0, alpha, t, g);
//     (x, y)
// }

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let builder = Builder::<tauri::Wry>::new().commands(collect_commands![
        calc_x,
        calc_y,
        monkey_y,
        calc_time,
        atan2,
        current_dardo_speed,
        current_mono_speed,
        angle_to_radians,
    ]);

    #[cfg(debug_assertions)]
    builder
        .export(Typescript::default(), "../src/lib/bindings.ts")
        .expect("Failed to export typescript bindings");

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
        .invoke_handler(builder.invoke_handler())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
