import { ChatBubbleBottomCenterTextIcon, MegaphoneIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Post',
        description:
            'Create your own anonymous post about the tech layoffs.',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        name: 'Read',
        description:
            'Read what others have to say.',
        icon: MegaphoneIcon
    }
]

export default function About() {
    return (
        <div className="py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="sm:text-center">
                    <h2 className="text-lg font-semibold leading-8 text-indigo-600">TechLayoffs.fyi</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A place to vent</p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        Techlayoffs.fyi is a platform where you can anonymously post about how the tech layoffs have impacted you.
                    </p>
                </div>

                <div className="mt-20 max-w-lg sm:mx-auto md:max-w-4xl">
                    <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                                    <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
