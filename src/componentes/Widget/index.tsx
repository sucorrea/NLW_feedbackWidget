import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import WidgetForm from "../WidgetForm";
import './styles.css'

const Widget = () => {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end;">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="flex bg-brand-500 rounded-full px-3 h-12 text-white items-center group">
        <ChatTeardropDots className="icon" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};

export default Widget;
