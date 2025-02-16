import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "免费版",
      price: "¥0",
      description: "适合个人用户和小型项目",
      features: ["创建最多5个静态二维码", "基础数据分析", "标准模板设计", "在线技术支持"],
    },
    {
      name: "订阅版",
      price: "¥49/月",
      description: "适合小型企业和专业用户",
      features: ["无限静态二维码", "最多50个动态二维码", "详细数据分析和报告", "自定义设计和logo", "优先技术支持"],
    },
    {
      name: "高级版",
      price: "¥199/月",
      description: "适合中型企业和高级营销人员",
      features: ["无限静态和动态二维码", "高级数据分析和API访问", "批量生成和管理", "团队协作功能", "24/7专属客户支持"],
    },
    {
      name: "企业版",
      price: "联系销售",
      description: "适合大型企业和特殊需求",
      features: [
        "完全定制化解决方案",
        "专属服务器和数据存储",
        "企业级API和集成支持",
        "全方位的安全保护",
        "专属客户经理",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="bg-wechat-50 py-12 md:py-24">
          <div className="container">
            <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              选择适合您的计划
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-center text-gray-500 md:text-xl">
              无论您是个人用户还是大型企业，我们都有适合您需求的解决方案
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
                        <CheckCircle2 className="mr-2 h-5 w-5 text-wechat-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 bg-wechat-500 hover:bg-wechat-600">选择方案</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-wechat-50 py-12 md:py-24">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold">需要更多信息？</h2>
            <p className="mb-8 text-gray-500">我们的销售团队随时为您服务，解答您的任何疑问</p>
            <Button size="lg" className="bg-wechat-500 hover:bg-wechat-600">
              联系我们
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

