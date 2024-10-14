// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);

export async function getProjects() {
    
    const data = await sql`SELECT * FROM projects`;
    return data;
}

export async function getTasks(projectId) {
    try {
        const tasks = await sql`SELECT * FROM tasks WHERE project_id = ${projectId};
        `;
        return tasks;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return [];
    }
}