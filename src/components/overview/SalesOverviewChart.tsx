import { motion } from "framer-motion";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { SALES_DATA } from "../../data/sales";

const SalesOverviewChart = () => {
    return (
        <motion.div
            className="bg-gray-800/100 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .8 }}
        >

            <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>

            <div className="h-80">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={SALES_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                        <XAxis dataKey="Month" stroke="#9CA3AF" tickFormatter={(month) => month.substring(0, 3)} />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                            contentStyle={{ backgroundColor: "rgba(31,41,55,0.8)", borderColor: "#4B5563" }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Line
                            type="monotone"
                            dataKey="Sales"
                            stroke='#6366F1'
                            strokeWidth={3}
                            dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
                            activeDot={{ r: 8, strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default SalesOverviewChart