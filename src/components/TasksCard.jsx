    // import { CircleDollar } from "@gravity-ui/icons";
    import { Card, Link } from "@heroui/react";

const TasksCard = ({task}) => {
    const {title, description} = task;
        return (
            <div className="bg-purple-100 w-[780px] mx-auto">
                <div className="px-[100px] py-4 mt-6">
            <Card variant="primary" className="border-3 border-purple-600 w-xl">
                {/* <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" /> */}
                <Card.Header>
                    <Card.Title className="text-2xl mb-2">{title}</Card.Title>
                    <Card.Description>
                       {description}
                    </Card.Description>
                </Card.Header>
                <Card.Footer>
                    <Link
                        aria-label="Go to Acme Creator Hub (opens in new tab)"
                        href="https://heroui.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Creator Hub
                        <Link.Icon aria-hidden="true" />
                    </Link>
                </Card.Footer>
            </Card>
            </div>
            </div>
        );
    }


export default TasksCard;