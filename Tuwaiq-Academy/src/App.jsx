import './App.css'
import Nav from './component/Nav'
import Registration from './component/Registration'
import Card from './component/Card'
import Title from './component/Title'
// import Footer from './component/Footer'



function App() {

  return (
    <>
      <Nav></Nav>
      <Title></Title>

      {/* <Title></Title> */}

      <div className='cards-cont p-5'>
      <Card type="برنامج" title="تهيئة المجموعات الإنتاجية باستخدام Red Hat OpenShift II" place="الرياض" time="أسبوع واحد" starts="11/26/2023" active="التفاصيل"></Card>
      <Card type="برنامج" title="بناء واجهة برمجة تطبيقات REST باستخدام Python و Django" place="عن بعد" time="أسبوع " starts="11/26/2023" active="التفاصيل"></Card>
      <Card type="برنامج" title="إدارة خدمات تقنية المعلومات (ITIL)" place="الرياض" time="أسبوع واحد" starts="11/26/2023" active="التفاصيل"></Card>

      <Card type="برنامج" title="بناء واجهة برمجة تطبيقات REST باستخدام Python و Django" place="عن بعد" time="أسبوع " starts="11/26/2023" active="التفاصيل"></Card>
      <Card type="معسكر" title="إدارة خدمات تقنية المعلومات (ITIL)" place="الرياض" time="أسبوع واحد" starts="11/26/2023" active="التفاصيل"></Card>
      <Card type="معسكر" title="إدارة خدمات تقنية المعلومات (ITIL)" place="الرياض" time="أسبوع واحد" starts="11/26/2023" active="التفاصيل"></Card>

      <Card type="برنامج" title="بناء واجهة برمجة تطبيقات REST باستخدام Python و Django" place="عن بعد" time="أسبوع " starts="11/26/2023" active="التفاصيل"></Card>
      <Card type="برنامج" title="بناء واجهة برمجة تطبيقات REST باستخدام Python و Django" place="عن بعد" time="أسبوع " starts="11/26/2023" active="التفاصيل"></Card>
      <Card type="برنامج" title="إدارة خدمات تقنية المعلومات (ITIL)" place="الرياض" time="أسبوع واحد" starts="11/26/2023" active="مغلق"></Card>


      </div>
      {/* <Card type="برنامج" title="تهيئة المجموعات الإنتاجية باستخدام Red Hat OpenShift II" place="الرياض" time="الرايض" starts="11/26/2023"></Card>
      <Card type="برنامج" title="تهيئة المجموعات الإنتاجية باستخدام Red Hat OpenShift II" place="الرياض" time="الرايض" starts="11/26/2023"></Card> */}

      {/* <Registration></Registration> */}

      {/* <Footer></Footer> */}
      {/* <Footer></Footer> */}

    </>
  )
}

export default App
