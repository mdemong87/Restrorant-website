import Container from "./Container";

export default function Discount() {
    return (
        <div className="text-white bg-gray-900 py-5">
            <Container>
                <Container>
                    <div className="text-center">
                        <h1 className="text-gray-400 font-medium text-4xl">SAVE 10% On Your First Order!</h1>
                        <p className="text-xl text-gray-500 pt-5 mx-auto w-2/3">
                            Join our email list and get 10% off. We will reach out to you on occasion about new releases and special deals and will never sell your information.
                        </p>
                    </div>
                </Container>
            </Container>
        </div>
    )
}
