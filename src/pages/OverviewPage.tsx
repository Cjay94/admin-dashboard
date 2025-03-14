import { motion } from "framer-motion";
import { STATCARD_ITEMS } from "../data/statcard";

import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import SalesOverviewChart from "../components/overview/SalesOverviewChart";


const OverviewPage = () => {
    return (
        <section className="flex-1 overflow-auto relative z-10">
            <Header title="Overview" />

            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                {/* Stats */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {STATCARD_ITEMS.map((item, idx) => (
                        <StatCard key={idx} name={item.name} icon={item.icon} value={item.value} color={item.color} />
                    ))}
                </motion.div>

                <div className="">
                    <SalesOverviewChart />
                </div>
            </main>

        </section>
    )
}

export default OverviewPage