import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "免费版",
      price: "¥0",
      description: "非常适合个人和小型项目",
      features: ["最多创建 5 个静态二维码", "基础分析", "标准模板", "在线支持"],
    },
    {
      name: "专业版",
      price: "¥49/月",
      description: "非常适合小型企业和专业人士",
      features: [
        "无限数量的静态二维码",
        "最多 50 个动态二维码",
        "详细的分析和报告",
        "自定义设计和 logo",
        "优先支持",
      ],
    },
    {
      name: "企业版",
      price: "¥199/月",
      description: "适用于中型企业和营销团队",
      features: [
        "无限数量的静态和动态二维码",
        "高级分析和 API 访问权限",
        "批量生成和管理",
        "团队协作功能",
        "24/7 专属支持",
      ],
    },
    {
      name: "定制版",
      price: "联系销售",
      description: "适用于有定制需求的大型组织",
      features: [
        "完全定制化解决方案",
        "专属服务器和存储",
        "企业级 API 和集成",
        "完整的安全套件",
        "专属客户经理",
      ],
    },
  ];

  return (
    <main className="flex-1">
      <section className="bg-green-50 py-12 md:py-24">
        <div className="container">
          <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">选择您的套餐</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-center text-gray-500 md:text-xl">
            无论您是个人用户还是大型企业，我们都有适合您的解决方案
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, index) => (
              <div key={index} className="flex flex-col rounded-lg border p-6 shadow-sm">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 text-4xl font-bold">{plan.price}</div>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 bg-green-500 hover:bg-green-600">选择套餐</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-12 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">需要更多信息吗？</h2>
          <p className="mb-8 text-gray-500">我们的销售团队随时为您解答任何疑问</p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600">
            联系我们
          </Button>
        </div>
      </section>
    </main>
  );
}

