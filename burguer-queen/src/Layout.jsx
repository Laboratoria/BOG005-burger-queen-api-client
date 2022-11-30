import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <main>
            <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="/Login">Login</Link> | {" "}
                <Link to="/Users">Users</Link>
            </nav>
            <section>
                <Outlet />
            </section>
        </main>
    )
    
}