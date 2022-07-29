// External imports
import {
    useBreakpoint,
    useBreakpointValue,
    VStack,
    Image,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

// Component imports
import { animation } from "./animations";
import { AnimatedPageProps, PageProps } from "./types";

// Project imports
import Footer from "@/components/footer";
import Head from "@/components/head";
import Nav, { CollapsibleNav } from "@/components/nav";

const Page = (props: PageProps) => {
    const { title, ...stackProps } = props;

    const isSmallScreen = useBreakpointValue({
        base: true,
        xs: true,
        md: false,
    });

    return (
        <VStack spacing={0} {...stackProps}>
            <Head
                title={props.title}
                description={props.description}
                imageUrl={props.imageUrl}
                robots={props.robots}
            />
            {isSmallScreen ? <CollapsibleNav /> : <Nav />}
            <main>{props.children}</main>
            <Footer />
        </VStack>
    );
};

const pageDefaultProps = {
    title: "",
    description: "",
    imageUrl: "",
    robots: "",
};

Page.defaultProps = pageDefaultProps;

export const AnimatedPage = (props: AnimatedPageProps) => {
    const { animationVariants, ...pageProps } = props;

    return (
        <motion.main
            key={props.title}
            variants={props.animationVariants as any}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <Page {...pageProps} />
        </motion.main>
    );
};

AnimatedPage.defaultProps = {
    animationVariants: animation,
    ...pageDefaultProps,
};

export default Page;
