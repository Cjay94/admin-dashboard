import { User } from "lucide-react"
import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"

const OverviewPage = () => {
    return (
        <div>
            <Header title="Sample" />

            <StatCard name="sample" icon={User} value="R1500" color="#000" />
        </div>
    )
}

export default OverviewPage