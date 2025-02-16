import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Coffee, GraduationCap, Plane, Stethoscope, Home, CreditCard, Share2 } from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <ShoppingBag className="h-10 w-10 text-green-500" />,
      title: "零售业解决方案",
      description: "提升客户体验，增加销售转化",
      features: ["产品信息快速获取", "会员卡和优惠券管理", "线上到线下引流", "客户行为分析"],
    },
    {
      icon: <Coffee className="h-10 w-10 text-green-500" />,
      title: "餐饮业解决方案",
      description: "简化点餐流程，提高顾客满意度",
      features: ["动态电子菜单", "在线订位系统", "外卖和自取服务", "顾客反馈收集"],
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-green-500" />,
      title: "教育行业解决方案",
      description: "优化学习体验，提高教学效率",
      features: ["课程资料快速访问", "校园导航和信息发布", "学生签到和考勤", "家校沟通平台"],
    },
    {
      icon: <Plane className="h-10 w-10 text-green-500" />,
      title: "旅游业解决方案",
      description: "丰富旅行体验，简化旅游服务",
      features: ["景点介绍和导览", "电子票务系统", "旅游路线规划", "实时交通信息"],
    },
    {
      icon: <Stethoscope className="h-10 w-10 text-green-500" />,
      title: "医疗保健解决方案",
      description: "改善患者服务，提高医疗效率",
      features: ["在线预约挂号", "病历和检查结果查询", "药品信息和使用说明", "健康教育资料推送"],
    },
    {
      icon: <Home className="h-10 w-10 text-green-500" />,
      title: "房地产解决方案",
      description: "优化房产营销，提升客户体验",
      features: ["房源信息快速获取", "虚拟看房体验", "预约看房系统", "社区服务和物业管理"],
    },
    {
      icon: <CreditCard className="h-10 w-10 text-green-500" />,
      title: "数字名片解决方案",
      description: "打造个人专业形象，拓展人脉网络",
      features: ["个人信息快速分享", "社交媒体账号整合", "专业技能和作品展示", "实时更新联系方式"],
    },
    {
      icon: <Share2 className="h-10 w-10 text-green-500" />,
      title: "聚合链接解决方案",
      description: "统一管理多平台内容，提高用户互动",
      features: ["多平台链接整合", "个性化页面设计", "访问数据分析", "内容更新和管理"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">行业解决方案</h1>
      <p className="text-xl text-gray-600 mb-12">
        我们为各行各业提供定制化的二维码解决方案，助力企业数字化转型，提升运营效率
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {solutions.map((solution, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                {solution.icon}
                <div>
                  <CardTitle>{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc pl-5 space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <Button className="w-full bg-green-500 hover:bg-green-600">了解更多</Button>
            </div>
          </Card>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">为什么选择我们的解决方案？</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>定制化服务</CardTitle>
            </CardHeader>
            <CardContent>
              <p>根据您的具体需求，提供量身定制的二维码解决方案，确保最佳契合度。</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>全面的技术支持</CardTitle>
            </CardHeader>
            <CardContent>
              <p>我们的技术团队全天候为您提供支持，确保您的二维码应用始终顺畅运行。</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>持续的创新</CardTitle>
            </CardHeader>
            <CardContent>
              <p>我们不断更新和改进我们的技术，确保您始终享受到最新、最优的服务。</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">准备好开始了吗？</h2>
        <p className="text-xl text-gray-600 mb-8">联系我们的销售团队，获取专属解决方案</p>
        <Button size="lg" className="bg-green-500 hover:bg-green-600">
          联系销售
        </Button>
      </section>
    </div>
  )
}

