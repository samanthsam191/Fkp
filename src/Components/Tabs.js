import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Portrait',
    features: [
      {
        name: 'Portrait photography',
        description:
          'Portrait photography is a photography genre that captures the likeness, personality, and mood of a person or group of people. It can be done in a studio or on location, and can include traditional posed shots, candid shots, or a combination of both',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
        imageAlt: 'Portrait photography',
      },
    ],
  },
  {
    name: 'Landscape',
    features: [
      {
        name: 'Landscape photography',
        description:
          'Landscape photography is capturing natural outdoor scenes, such as mountains, forests, beaches, rivers etc, with the aim of showing the beauty of nature.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
        imageAlt:
          'Landscape photography',
      },
    ],
  },
  {
    name: 'Fashion',
    features: [
      {
        name: 'Fashion photography',
        description:
          "Fashion photography is a genre that focuses on capturing clothing, accessories and models in an artistic and visually pleasing way, to showcase fashion trends and designs.",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
        imageAlt: 'Fashion photography',
      },
    ],
  },
  {
    name: 'Wedding',
    features: [
      {
        name: "Wedding photography",
        description:
          'Wedding photography is capturing special moments, emotions, and memories of a couple`s wedding day through various styles, traditional, candid, or photojournalistic.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
        imageAlt: 'Wedding photography',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl pb-20 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <Tab.Group as="div">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10 justify-center">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-black text-black'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
                          <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  )
}
