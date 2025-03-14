import { motion } from "framer-motion";
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { SALES_CHANNEL_DATA } from "../../data/sales";

const SalesChannelChart = () => {
    return (
        <motion.div
            className="bg-gray-800/100 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .8 }}
        >

            <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales by Channel</h2>

            <div className="h-80">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <BarChart data={SALES_CHANNEL_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                        <XAxis dataKey="name" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                            contentStyle={{ backgroundColor: "rgba(31,41,55,0.8)" }}
                            itemStyle={{ color: "#4B5563" }}
                        />
                        <Legend />
                        <Bar dataKey={"value"}>
                            {SALES_CHANNEL_DATA.map((item, idx) => (
                                <Cell key={idx} fill={item.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default SalesChannelChart