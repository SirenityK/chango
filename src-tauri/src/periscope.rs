#[tauri::command]
#[specta::specta]
pub fn calculate_mirror_points(cx: f64, cy: f64, length: f64, angle: f64) -> (f64, f64, f64, f64) {
    let x1 = cx - (length / 2.0) * angle.cos();
    let y1 = cy - (length / 2.0) * angle.sin();
    let x2 = cx + (length / 2.0) * angle.cos();
    let y2 = cy + (length / 2.0) * angle.sin();
    (x1, y1, x2, y2)
}
