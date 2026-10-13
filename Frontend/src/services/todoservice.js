const API_URL = "http://localhost:8080/api/tasks";

export async function getTasks() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }

    return response.json();
}

export async function addTask(title, color, date, time) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: title,
            color: color,
            date: date,
            time: time,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to add task");
    }

    return response.json();
}
export async function deleteTask(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete task ");
    }
}