import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";

const faqs = [
  {
      "question": "What is NEXU?",
      "answer": "NEXU is a comprehensive project management tool designed to assist teams in planning, executing, and monitoring projects effectively. It offers an intuitive interface combined with powerful features that help streamline workflows, enhance collaboration, and improve productivity across various industries."
  },
  {
      "question": "How can I sign up for NEXU?",
      "answer": "You can easily sign up for NEXU by visiting our official website and clicking on the 'Sign Up' button located on the homepage. The registration process is straightforward: just fill in the required details, follow the prompts, and you’ll be ready to start managing your projects shortly."
  },
  {
      "question": "Is NEXU suitable for small businesses?",
      "answer": "Absolutely! NEXU is designed to be scalable, making it suitable for businesses of all sizes, including small businesses. With features tailored to meet the unique needs of smaller teams, it helps manage projects efficiently while keeping costs manageable."
  },
  {
      "question": "What features does NEXU offer?",
      "answer": "NEXU provides a wide range of features to support effective project management. These include task management tools, real-time team collaboration options, customizable project timelines, insightful reporting capabilities, and seamless integration with other software, all aimed at improving team productivity and project success."
  },
  {
      "question": "Can I integrate NEXU with other software?",
      "answer": "Yes, NEXU supports integrations with many popular tools such as Slack, Google Drive, Trello, and others. This flexibility allows you to connect your existing tools and workflows, ensuring that your team can work more efficiently and stay in sync across platforms."
  },
  {
      "question": "Is there a mobile app for NEXU?",
      "answer": "No, there is not a mobile app for NEXU yet, but will be in near future for better productivity and easy usage."
  },
  {
      "question": "How does NEXU ensure data security?",
      "answer": "NEXU prioritizes data security by implementing industry-standard security measures, including data encryption during transmission and storage, regular system backups, and strict access controls. We understand how critical your data is and are committed to protecting your information from unauthorized access."
  }
];

const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
        Unleash Your Productivity <br />
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
          using{" "}
            <Image
              src={"/logo2.png"}
              alt="Zscrum Logo"
              width={400}
              height={80}
              className="h-14 sm:h-24 w-auto object-contain"
            />
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
        Streamline your team's efforts with our accessible project management system.        </p>
        <p className="text-xl mb-12 max-w-2xl mx-auto"></p>
        <Link href="/onboarding">
          <Button size="lg" className="mr-4">
            Get Started <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
        <Link href="#features">
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Carousel */}
      <section className="py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted by Industry Leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-4xl font-extrabold text-center text-white mb-10 tracking-tight">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                <AccordionTrigger className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-300 flex justify-between py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 bg-gray-800 p-4 rounded-md">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 md:px-0 text-center text-white shadow-lg rounded-lg">
        <h3 className="text-4xl font-extrabold mb-6 md:mb-8 tracking-tight">
          Ready to transform the way you work?
        </h3>
        <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Join thousands of teams already leveraging <span className="font-extrabold text-yellow-300">NEXU</span> to streamline projects and boost productivity.
        </p>
        <div className="flex justify-center">
          <Link href="/onboarding">
            <Button size="lg" className="bg-yellow-400 text-blue-800 hover:bg-yellow-300 px-8 py-4 rounded-full font-semibold shadow-md animate-bounce flex items-center justify-center transition-all duration-300">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
