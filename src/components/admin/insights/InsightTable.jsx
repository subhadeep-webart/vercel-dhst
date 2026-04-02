"use client"

import Image from "next/image";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/admin/table";
import { INSIGHT_TABLE_HEADER } from "@/constants/admin-constants";
import { useInsights } from "@/hooks/useInsights";
import InsightActionButtonGroup from "./InsightActionButtonGroup";

export default function InsightTable() {
    const { insights, loading, deleteInsight } = useInsights();

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                <div className="min-w-[1000px]">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                {
                                    INSIGHT_TABLE_HEADER?.map((table) => (<TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                        key={table.id}
                                    >
                                        {table.name}
                                    </TableCell>))
                                }
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {insights.map((insight, index) => (
                                <TableRow key={insight.id}>
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <div
                                            className="w-20 h-16 overflow-hidden border-2 border-white rounded-lg dark:border-gray-900 shadow-lg"
                                        >
                                            <Image
                                                width={80}
                                                height={64}
                                                src={insight.image_url}
                                                className="w-full"
                                                alt={insight.title}
                                            />
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {insight.title}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-start text-theme-sm dark:text-gray-400 text-autumn-leaves">
                                        {insight.highlight_text}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {insight.description}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <InsightActionButtonGroup insight={insight} loading={loading} deleteInsight={deleteInsight} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
