import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, User, Building } from "lucide-react"

interface AgentProps {
  name: string
  title: string
  phone: string
  email: string
  image: string
  properties: number
  experience: string
}

interface PropertyAgentCardProps {
  agent: AgentProps
}

export default function PropertyAgentCard({ agent }: PropertyAgentCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover" />
          </div>
          <h3 className="text-xl font-semibold">{agent.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{agent.title}</p>

          <div className="flex gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <Building className="h-4 w-4 mr-1" />
              {agent.properties} Properties
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {agent.experience}
            </div>
          </div>

          <div className="w-full space-y-3">
            <Button className="w-full" variant="default" size="lg">
              <Phone className="mr-2 h-4 w-4" />
              Call Agent
            </Button>
            <Button className="w-full" variant="outline" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Email Agent
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
