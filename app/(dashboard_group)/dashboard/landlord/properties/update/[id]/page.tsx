import UpdateProperty from "@/app/(dashboard_group)/_components/landlordComponent/PropertyForUpdate";

interface PageProps {
  params: Promise<{ id: string }>;
}

const UPdatePropertyPage = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <div>
      <UpdateProperty params={id} />
    </div>
  );
};

export default UPdatePropertyPage;
