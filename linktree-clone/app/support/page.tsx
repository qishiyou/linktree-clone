import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, Mail, Phone, MessageSquare } from "lucide-react"

export default function SupportPage() {
  const faqs = [
    {
      question: "如何创建我的第一个二维码？",
      answer:
        '登录您的账户后，点击"创建二维码"按钮。选择您想要创建的二维码类型（如URL、文本等），输入相关信息，然后点击"生成"。您可以自定义二维码的颜色和大小，完成后点击"下载"即可。',
    },
    {
      question: "我可以编辑已经创建的二维码吗？",
      answer:
        '是的，您可以编辑动态二维码的内容而无需重新生成新的二维码。登录您的账户，找到您想要编辑的二维码，点击"编辑"，更改内容后保存即可。静态二维码一旦创建就无法编辑内容。',
    },
    {
      question: "如何跟踪我的二维码的扫描数据？",
      answer:
        "在您的账户仪表板中，您可以查看每个二维码的扫描统计信息。这包括总扫描次数、独立用户数、扫描位置等详细数据。您还可以设置自定义日期范围来查看特定时期的数据。",
    },
    {
      question: "二维码有使用期限吗？",
      answer:
        "静态二维码没有使用期限。对于动态二维码，只要您的账户处于活跃状态，它们就会一直有效。如果您取消订阅，动态二维码可能会停止工作。",
    },
    {
      question: "我可以将我的logo添加到二维码中吗？",
      answer:
        '是的，我们的高级版本支持在二维码中添加自定义logo。在创建或编辑二维码时，您会看到"添加logo"选项。上传您的logo图片，调整大小和位置，然后保存即可。',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">客户支持</h1>

      <section className="mb-12">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">如何可以帮助您？</h2>
          <div className="flex">
            <Input type="search" placeholder="搜索常见问题..." className="flex-grow" />
            <Button type="submit" className="ml-2 bg-green-500 hover:bg-green-600">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">常见问题</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">联系我们</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2" /> 电子邮件
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>support@qrcodepro.com</p>
              <p className="text-sm text-gray-500 mt-2">我们会在24小时内回复您的邮件</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2" /> 电话
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>+86 400-123-4567</p>
              <p className="text-sm text-gray-500 mt-2">周一至周五 9:00-18:00</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2" /> 在线聊天
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>点击右下角的聊天图标</p>
              <p className="text-sm text-gray-500 mt-2">我们的客服人员随时为您服务</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">还没找到答案？</h2>
        <p className="mb-6">我们的支持团队随时为您服务，帮助解决任何问题</p>
        <Button size="lg" className="bg-green-500 hover:bg-green-600">
          联系支持团队
        </Button>
      </section>
    </div>
  )
}

