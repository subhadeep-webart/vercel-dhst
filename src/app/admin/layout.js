import { SidebarProvider } from "@/provider/SidebarProvider"
import { ThemeProvider } from "@/provider/ThemeProvider"
import "./admin.css"

const AdminLayout = ({ children }) => {
    return (
        <ThemeProvider>
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </ThemeProvider>
    )
}

export default AdminLayout