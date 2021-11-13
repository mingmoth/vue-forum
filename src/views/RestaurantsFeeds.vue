<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <!-- 最新餐廳 NewestRestaurants -->
        <LatestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <LatestComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import LatestRestaurants from "../components/LatestRestaurants.vue";
import LatestComments from "../components/LatestComments.vue";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Macey Durgan Jr.",
      tel: "(048) 327-7674",
      address: "018 Kulas Extension",
      opening_hours: "08:00",
      description:
        "Totam distinctio quos quas mollitia et. Dolor et aut animi tempora et similique. Explicabo aut qui voluptas harum. Aliquid atque ratione. Temporibus sunt voluptas vel ea similique rem. Non molestias incidunt cupiditate exercitationem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.355713784927278",
      viewCounts: 0,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
    },
    {
      id: 2,
      name: "Mohamed Lesch",
      tel: "1-199-335-6043 x42169",
      address: "46490 Pfeffer Ferry",
      opening_hours: "08:00",
      description:
        "Voluptas ut iure illo asperiores voluptatum qui magni ipsa. Voluptatem ullam aut consequatur nesciunt possimus ut. Sed et sit qui. Possimus labore unde et optio non molestiae sit modi. Dignissimos nihil alias sed facere. Consequuntur provident quia aut veniam illo blanditiis et vel asperiores.\n \rAmet distinctio voluptatibus eos sunt hic dolore. Eaque adipisci qui quos aut aliquam voluptate est placeat itaque. Rerum facilis est id corporis qui iusto repellendus blanditiis tenetur.\n \rIure ipsa incidunt quia sunt iusto repellendus. Excepturi et iste. Atque ut fugit. Quia et aut quis ut voluptates voluptas aliquid sit dolores. Quisquam corrupti autem possimus ratione ut aperiam eum. Laudantium error facere.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.0349404092708",
      viewCounts: 0,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
    },
    {
      id: 3,
      name: "Ezekiel Fay",
      tel: "695-914-8076",
      address: "705 Vandervort Lodge",
      opening_hours: "08:00",
      description:
        "Eius autem ex praesentium excepturi minus. Iusto omnis eum odio sequi dignissimos blanditiis rerum aut. Neque et labore doloribus occaecati quis libero ut est. Aliquid qui aperiam culpa corporis explicabo. Aut reprehenderit tempore minima soluta dignissimos. Est iste quia impedit odit nam sunt animi placeat illo.\n \rNihil necessitatibus ut molestias earum officiis. Quo et aut voluptates est dolor eum architecto et accusamus. Error beatae ea vitae sed repudiandae et exercitationem. Perferendis dicta voluptate in corporis.\n \rEaque fugit rerum sed et est laborum incidunt consequuntur qui. Exercitationem voluptatibus ratione quibusdam quia laudantium dolorum. Voluptate laboriosam voluptas repellat aut quis error aut. Autem sapiente fuga beatae natus corrupti tempore reiciendis nihil ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.8381483143463",
      viewCounts: 0,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
    },
    {
      id: 4,
      name: "Pinkie Mayert",
      tel: "1-440-959-5075 x68614",
      address: "4989 Lemke Underpass",
      opening_hours: "08:00",
      description:
        "Dolor iste distinctio aut ut qui rerum maiores possimus libero.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.418494944283317",
      viewCounts: 0,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
    },
    {
      id: 5,
      name: "Mia Crist",
      tel: "1-721-501-9647 x26377",
      address: "6507 Streich Underpass",
      opening_hours: "08:00",
      description:
        "Eveniet suscipit ullam laborum ut unde veniam enim.\nFuga numquam natus ut mollitia similique quo quisquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.19752741056182",
      viewCounts: 0,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
    },
    {
      id: 6,
      name: "Imani Jacobson",
      tel: "772-850-1554 x4298",
      address: "00729 Lind Spring",
      opening_hours: "08:00",
      description:
        "Ut facilis voluptatibus. Pariatur et modi facilis. Dolore deserunt repellat harum sint eum aperiam molestiae. Laboriosam quam praesentium et deleniti cupiditate officiis ducimus non quis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.5239329320552",
      viewCounts: 0,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
    },
    {
      id: 7,
      name: "Santiago Mills",
      tel: "1-960-198-0747",
      address: "0972 Windler Knoll",
      opening_hours: "08:00",
      description: "quae",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.52492845741585",
      viewCounts: 0,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
    },
    {
      id: 8,
      name: "Nellie Carroll",
      tel: "580.155.5910",
      address: "080 Turcotte Plains",
      opening_hours: "08:00",
      description:
        "Aut maiores quidem nesciunt. Eaque error atque voluptatem qui optio voluptatem. Optio officiis et maxime modi eius illum.\n \rTempora ut et enim unde quia dolore. Illum voluptates ut ipsum voluptatem. Amet vero et.\n \rUt repellat beatae. Nostrum suscipit fugit et ut sequi et. Nulla iure molestiae aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.35075762241698",
      viewCounts: 0,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
    },
    {
      id: 9,
      name: "Lucius Huel",
      tel: "1-722-123-6781",
      address: "134 Deshaun Ranch",
      opening_hours: "08:00",
      description: "optio",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.396101864983315",
      viewCounts: 0,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
    },
    {
      id: 10,
      name: "Yolanda Kuhlman",
      tel: "(294) 740-2774 x82462",
      address: "0694 Eudora Brooks",
      opening_hours: "08:00",
      description: "ullam voluptatum rerum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.1489243837808",
      viewCounts: 0,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
    },
  ],
  comments: [
    {
      id: 7,
      text: "Sed architecto omnis doloremque deserunt.",
      UserId: 1,
      RestaurantId: 7,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$AvHu1laIippZL3G.UJ08jOEMQZw/bRyFBonVfNCqABVvcO5ZHOqzS",
        isAdmin: true,
        image: null,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
      Restaurant: {
        id: 7,
        name: "Santiago Mills",
        tel: "1-960-198-0747",
        address: "0972 Windler Knoll",
        opening_hours: "08:00",
        description: "quae",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=70.52492845741585",
        viewCounts: 0,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 24,
      text: "Quos dolorem omnis.",
      UserId: 1,
      RestaurantId: 24,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$AvHu1laIippZL3G.UJ08jOEMQZw/bRyFBonVfNCqABVvcO5ZHOqzS",
        isAdmin: true,
        image: null,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
      Restaurant: {
        id: 24,
        name: "Carol Hintz",
        tel: "(762) 809-1068",
        address: "714 Kihn Spring",
        opening_hours: "08:00",
        description:
          "Quasi omnis eveniet sed in ut. Facere molestiae et ducimus. Ea molestiae est quod voluptas. Suscipit minus error saepe eaque qui.\n \rCum sed rem aut voluptas illo quis cum soluta sit. Et neque maxime quo quia doloribus totam. Dolorem maiores repellat facere et molestiae occaecati.\n \rId nihil possimus quos aliquam et et. Qui sint dolorem et possimus eum natus. Quo labore nam neque.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=90.11373566322698",
        viewCounts: 0,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 48,
      text: "Consequuntur facilis qui magnam blanditiis sapiente sint nobis.",
      UserId: 1,
      RestaurantId: 48,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$AvHu1laIippZL3G.UJ08jOEMQZw/bRyFBonVfNCqABVvcO5ZHOqzS",
        isAdmin: true,
        image: null,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
      Restaurant: {
        id: 48,
        name: "Carlo Fahey",
        tel: "611-463-8552 x155",
        address: "06752 Ethelyn Rue",
        opening_hours: "08:00",
        description:
          "Numquam quia eos corrupti officia quia facilis debitis doloremque.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=90.98300744245529",
        viewCounts: 0,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 63,
      text: "Aut non eligendi odit deleniti qui aut quidem nisi.",
      UserId: 1,
      RestaurantId: 13,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$AvHu1laIippZL3G.UJ08jOEMQZw/bRyFBonVfNCqABVvcO5ZHOqzS",
        isAdmin: true,
        image: null,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
      Restaurant: {
        id: 13,
        name: "Bridget Dooley",
        tel: "(938) 239-2772 x219",
        address: "09409 Rosa Ville",
        opening_hours: "08:00",
        description:
          "Et fugiat error dolores aut consectetur est. Ullam qui facilis totam assumenda illo. Et id unde unde facere qui. Sed ea harum dicta.\n \rUt beatae illo alias aspernatur eveniet enim consequatur amet. Sint voluptate mollitia. Qui explicabo in pariatur temporibus a et.\n \rUnde exercitationem corporis ex veritatis. Error alias temporibus. Nemo ea nulla voluptatem sit laboriosam dolor commodi sed ratione. Quidem vel iure cupiditate. Provident voluptate provident tenetur ratione totam quibusdam voluptates.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=69.67506028620522",
        viewCounts: 0,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 76,
      text: "Nihil unde dolores distinctio sapiente tenetur labore qui.",
      UserId: 1,
      RestaurantId: 26,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$AvHu1laIippZL3G.UJ08jOEMQZw/bRyFBonVfNCqABVvcO5ZHOqzS",
        isAdmin: true,
        image: null,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
      Restaurant: {
        id: 26,
        name: "Fernando Kessler",
        tel: "(516) 127-9164 x511",
        address: "66238 Garry Spring",
        opening_hours: "08:00",
        description: "quasi",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=39.34349681614388",
        viewCounts: 0,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 104,
      text: "Dolorem eius culpa.",
      UserId: 1,
      RestaurantId: 4,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$AvHu1laIippZL3G.UJ08jOEMQZw/bRyFBonVfNCqABVvcO5ZHOqzS",
        isAdmin: true,
        image: null,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
      Restaurant: {
        id: 4,
        name: "Pinkie Mayert",
        tel: "1-440-959-5075 x68614",
        address: "4989 Lemke Underpass",
        opening_hours: "08:00",
        description:
          "Dolor iste distinctio aut ut qui rerum maiores possimus libero.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=20.418494944283317",
        viewCounts: 0,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 127,
      text: "Est consequatur expedita ad deserunt vero sequi sit dolor aut.",
      UserId: 1,
      RestaurantId: 27,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$AvHu1laIippZL3G.UJ08jOEMQZw/bRyFBonVfNCqABVvcO5ZHOqzS",
        isAdmin: true,
        image: null,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
      Restaurant: {
        id: 27,
        name: "Miracle Lakin",
        tel: "759.498.9508",
        address: "336 Osinski Orchard",
        opening_hours: "08:00",
        description:
          "Et laboriosam nam necessitatibus. Debitis et nemo et eius aut. Ut eum sunt ipsam error dolor est enim culpa. Labore eius eligendi exercitationem non minima. Rerum cum inventore ut ut atque consequatur earum. Quod eius a at.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=86.47085388480782",
        viewCounts: 0,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 11,
      text: "Dolor est quis expedita.",
      UserId: 2,
      RestaurantId: 11,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$gNbxX.GggESFVSk7iooboOzCDVIcHBoKF0fwbZaM0Ai7BhbtbNn8y",
        isAdmin: false,
        image: null,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
      Restaurant: {
        id: 11,
        name: "Keely Hodkiewicz",
        tel: "(557) 197-1422 x9913",
        address: "8955 Brock Lodge",
        opening_hours: "08:00",
        description:
          "Corporis quia placeat illum est. Excepturi vel facilis aut omnis aut tempore sed vero et. Cumque nemo quia quas maiores. Et praesentium aut enim vitae id quae quia soluta sit. Illum nihil et rerum ab reiciendis rem est.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=48.41995837603221",
        viewCounts: 0,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 42,
      text: "Deleniti quam placeat quo saepe iure omnis voluptatem beatae doloremque.",
      UserId: 2,
      RestaurantId: 42,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$gNbxX.GggESFVSk7iooboOzCDVIcHBoKF0fwbZaM0Ai7BhbtbNn8y",
        isAdmin: false,
        image: null,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
      Restaurant: {
        id: 42,
        name: "Trudie Wehner",
        tel: "715.128.1709 x80275",
        address: "030 Karley Club",
        opening_hours: "08:00",
        description:
          "Consequatur quibusdam ipsa eaque sunt in accusantium sapiente. Atque a quae eius dolores enim qui enim. Repellendus qui vitae explicabo eius accusantium omnis necessitatibus explicabo.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=13.985098221712256",
        viewCounts: 0,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 56,
      text: "Sunt in reiciendis est et ex.",
      UserId: 2,
      RestaurantId: 6,
      createdAt: "2021-10-10T07:19:42.000Z",
      updatedAt: "2021-10-10T07:19:42.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$gNbxX.GggESFVSk7iooboOzCDVIcHBoKF0fwbZaM0Ai7BhbtbNn8y",
        isAdmin: false,
        image: null,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
      },
      Restaurant: {
        id: 6,
        name: "Imani Jacobson",
        tel: "772-850-1554 x4298",
        address: "00729 Lind Spring",
        opening_hours: "08:00",
        description:
          "Ut facilis voluptatibus. Pariatur et modi facilis. Dolore deserunt repellat harum sint eum aperiam molestiae. Laboriosam quam praesentium et deleniti cupiditate officiis ducimus non quis.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=40.5239329320552",
        viewCounts: 0,
        createdAt: "2021-10-10T07:19:42.000Z",
        updatedAt: "2021-10-10T07:19:42.000Z",
        CategoryId: 1,
      },
    },
  ],
};

export default {
  name: "RestaurantsFeeds",
  components: {
    NavTabs,
    LatestRestaurants,
    LatestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants;
      this.comments = dummyData.comments;
    },
  },
};
</script>