import * as RadixTabs from "@radix-ui/react-tabs";

export interface TabsProps {
  children: React.ReactNode;
}

const Tabs = ({ children }: TabsProps) => (
  <RadixTabs.Root className="TabsRoot" defaultValue="tab1">
    <RadixTabs.List className="TabsList" aria-label="Manage your account">
      <RadixTabs.Trigger className="TabsTrigger" value="tab1">
        Your Transcriptions
      </RadixTabs.Trigger>
      <RadixTabs.Trigger className="TabsTrigger" value="tab2">
        All Transcriptions
      </RadixTabs.Trigger>
    </RadixTabs.List>
    <RadixTabs.Content className="TabsContent" value="tab1">
      {children}
    </RadixTabs.Content>
    <RadixTabs.Content className="TabsContent" value="tab2"></RadixTabs.Content>
  </RadixTabs.Root>
);

export default Tabs;
