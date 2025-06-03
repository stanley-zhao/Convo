import { Card } from "../../card";
import React from "react";

type Props = React.PropsWithChildren;

const ConversationContainer = ({ children }: Props) => {
    return (
        <Card className="hidden lg:flex w-full h-[calc(100vh-32px)] lg:h-full p-2 flex-col gap-2">
            {children}
        </Card>
    )
}

export default ConversationContainer;