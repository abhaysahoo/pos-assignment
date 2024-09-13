import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const BreadCrumb = () => {
  return (
      <Breadcrumb>
          <BreadcrumbList>
              <BreadcrumbItem>
                  <BreadcrumbLink href="#" className='font-bold stroke_secondary'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                  <BreadcrumbLink href="#" className='font-bold stroke_secondary'>Review Skills</BreadcrumbLink>
              </BreadcrumbItem>
          </BreadcrumbList>
      </Breadcrumb>
  )
}

export default BreadCrumb