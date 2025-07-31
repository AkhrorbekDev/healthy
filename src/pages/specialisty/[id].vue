<template>
  <div class="main-container mx-auto w-full overflow-hidden bg-[#f0f4f1] py-[60px]">
    <app-section>
      <div>
        <div class="flex flex-col items-start gap-[40px] md:flex-row">
          <div
            class="flex flex-col flex-nowrap items-start justify-center gap-[20px] rounded-[20px] bg-[#fff] px-[10px] py-[15px] md:w-[447px] md:p-[15px]"
          >
            <div class="relative shrink-0 self-stretch rounded-[10px]">
              <img
                class="object-cover"
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/7YXfcRq8uS.png"
                alt=""
              />
            </div>
            <ui-button class="!hidden w-full md:flex">Записаться</ui-button>
            <div class="grid gap-[20px] md:hidden">
              <p class="text-mobile-headline-2 font-bold">Ахмедов Санджар Акбарович</p>
              <div class="grid gap-[5px]">
                <div class="w-fit rounded-[100px] border border-solid border-[#63845c] px-[8px] py-[4px]">
                  <span class="text-mobile-body-14 font-bold text-[#63845c]">врач-психотерапевт</span>
                </div>
                <div class="w-fit rounded-[100px] border border-solid border-[#63845c] px-[8px] py-[4px]">
                  <span class="text-mobile-body-14 font-bold text-[#63845c]">врач-психотерапевт</span>
                </div>
                <div class="w-fit rounded-[100px] border border-solid border-[#63845c] px-[8px] py-[4px]">
                  <span class="text-mobile-body-14 font-bold text-[#63845c]">врач-психотерапевт</span>
                </div>
              </div>
            </div>
            <div class="grid gap-[8px]">
              <div class="flex items-center gap-[8px]">
                <icon class="text-[18px] text-green-500" name="h-icon:achieve"></icon>
                <span class="text-mobile-body-15 font-medium text-[#323232] md:text-body-17">Опыт: 37 лет</span>
              </div>
              <div class="flex items-center gap-[8px]">
                <icon class="text-[18px] text-green-500" name="h-icon:location"></icon>

                <span class="text-mobile-body-15 font-medium text-[#323232] md:text-body-17">Рейтинг: 5.0</span>
              </div>
              <div class="flex items-center gap-[8px]">
                <icon class="text-[18px] text-green-500" name="h-icon:language"></icon>

                <span class="text-mobile-body-15 font-medium text-[#323232] md:text-body-17">Ташкент</span>
              </div>
              <div class="flex flex-nowrap items-center gap-[8px] self-stretch">
                <icon class="text-[18px] text-green-500" name="h-icon:achieve"></icon>

                <span class="text-left font-['Onest'] text-mobile-body-15 font-medium text-[#323232]">
                  Русский, Узбекский
                </span>
              </div>
            </div>
            <div class="border-t border-solid border-t-[#E8E8E8] pt-[15px]">
              <span class="text-mobile-subtitle-22 font-semibold text-[#323232]">от 200 000 сум</span>
            </div>
          </div>
          <div class="md:w-[953px]">
            <div
              class="mb-[40px] hidden h-[402px] flex-col flex-nowrap items-start gap-[30px] rounded-[20px] bg-[#fff] md:flex md:p-[30px]"
            >
              <div class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[12px] self-stretch">
                <span
                  class="relative h-[48px] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[40px] font-semibold leading-[48px] text-[#323232]"
                >
                  Ахмедов Санджар Акбарович
                </span>
                <div class="relative flex w-[574px] items-start gap-[5px]">
                  <div
                    class="relative flex w-[183px] items-center justify-center gap-[10px] rounded-[100px] border border-solid border-[#63845c] pb-[5px] pl-[10px] pr-[10px] pt-[5px]"
                  >
                    <span
                      class="relative h-[20px] shrink-0 basis-auto text-left font-['Onest'] text-[16px] font-bold leading-[20px] text-[#63845c]"
                    >
                      врач-психотерапевт
                    </span>
                  </div>
                  <div
                    class="relative flex w-[205px] items-center justify-center gap-[10px] rounded-[100px] border border-solid border-[#63845c] pb-[5px] pl-[10px] pr-[10px] pt-[5px]"
                  >
                    <span
                      class="relative h-[20px] shrink-0 basis-auto text-left font-['Onest'] text-[16px] font-bold leading-[20px] text-[#63845c]"
                    >
                      медицинский психолог
                    </span>
                  </div>
                  <div
                    class="relative flex w-[176px] items-center justify-center gap-[10px] rounded-[100px] border border-solid border-[#63845c] pb-[5px] pl-[10px] pr-[10px] pt-[5px]"
                  >
                    <span
                      class="relative h-[20px] shrink-0 basis-auto text-left font-['Onest'] text-[16px] font-bold leading-[20px] text-[#63845c]"
                    >
                      кандидат мед. наук
                    </span>
                  </div>
                </div>
              </div>
              <div class="relative flex h-[134px] w-[381px] shrink-0 flex-col flex-nowrap items-start gap-[10px]">
                <div class="relative flex w-[148px] items-center gap-[8px]">
                  <div
                    class="relative h-[18px] w-[18px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/E8uBFMcRdm.png)] bg-cover bg-no-repeat"
                  ></div>
                  <span
                    class="relative h-[26px] shrink-0 basis-auto text-left font-['Onest'] text-[20px] font-medium text-[#323232]"
                  >
                    Опыт: 37 лет
                  </span>
                </div>
                <div class="relative flex w-[147px] items-center gap-[8px]">
                  <div
                    class="relative h-[18px] w-[18px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/DWvqgNmLky.png)] bg-cover bg-no-repeat"
                  ></div>
                  <span
                    class="relative h-[26px] shrink-0 basis-auto text-left font-['Onest'] text-[20px] font-medium text-[#323232]"
                  >
                    Рейтинг: 5.0
                  </span>
                </div>
                <div class="relative flex w-[107px] items-center gap-[8px]">
                  <div
                    class="relative h-[18px] w-[18px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/sS6879Cums.png)] bg-cover bg-no-repeat"
                  ></div>
                  <span
                    class="relative h-[26px] shrink-0 basis-auto text-left font-['Onest'] text-[20px] font-medium text-[#323232]"
                  >
                    Ташкент
                  </span>
                </div>
                <div class="relative flex items-center gap-[8px] self-stretch">
                  <div class="relative h-[18px] w-[18px] shrink-0 overflow-hidden">
                    <div
                      class="relative mb-0 ml-[1.5px] mr-0 mt-[1.5px] h-[15px] w-[15px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/ZDGdHqq1Ys.png)] bg-[length:100%_100%] bg-no-repeat"
                    ></div>
                  </div>
                  <span
                    class="relative flex h-[26px] w-[345px] shrink-0 basis-auto items-start justify-start text-left font-['Onest'] text-[20px] font-medium text-[#323232]"
                  >
                    Русский, Узбекский
                  </span>
                </div>
              </div>
              <div
                class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[15px] self-stretch border-b border-solid border-b-[#e7e7e7] pb-0 pt-[20px]"
              >
                <span
                  class="relative h-[38px] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[30px] font-semibold leading-[38px] text-[#323232]"
                >
                  от 200 000 сум
                </span>
              </div>
            </div>
            <div class="flex flex-col flex-nowrap items-start rounded-[20px] bg-[#fff] px-[15px] py-[20px] md:p-[30px]">
              <div class="relative flex items-center gap-[45px] self-stretch border-b border-solid border-b-[#e7e7e7]">
                <div
                  class="relative flex items-center justify-center gap-[10px] border-b-2 border-solid border-b-[#63845c] pb-[10px] pt-0"
                >
                  <span
                    class="text-mobile-body-15 md:text-body-18 font-semibold text-[#63845c]"
                  >
                    Специалист
                  </span>
                </div>
                <div class="relative flex w-[60px] items-center justify-center gap-[10px] pb-[10px] pt-0">
                  <span
                    class="text-mobile-body-15 md:text-body-18 font-medium text-[#323232]"
                  >
                    Услуги
                  </span>
                </div>
                <div class="relative flex w-[41px] items-center justify-center gap-[10px] pb-[10px] pt-0">
                  <span
                    class="text-mobile-body-15 md:text-body-18 font-medium text-[#323232]"
                  >
                    Блог
                  </span>
                </div>
              </div>

              <template v-if="activeTab === 'specialist'">
                <div
                  class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[15px] self-stretch border-t border-solid border-t-[#e7e7e7] pb-[20px] pt-[20px] md:pb-[25px] md:pt-[25px]"
                >
                  <div class="">
                    <span class="font-semibold text-[#323232]">О специалисте</span>
                  </div>
                  <span class="text-mobile-body-15 font-normal text-[#585958] md:text-body-18">
                    Ахмедов Санджар Акбарович — психотерапевт с 37-летним опытом работы. Специализируется на лечении
                    неврозов, панических атак, депрессии. За свою карьеру помог более 500 пациентам восстановить
                    душевное равновесие. Является членом Ассоциации психиатров, регулярно выступает с лекциями для
                    молодых специалистов
                  </span>
                </div>
                <div
                  class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[20px] self-stretch border-t border-solid border-t-[#e7e7e7] pb-[20px] pt-[20px] md:pb-[25px] md:pt-[25px]"
                >
                  <div class="relative flex items-center justify-between self-stretch">
                    <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">
                      Образование
                    </span>
                  </div>
                  <div class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[15px] self-stretch">
                    <ul class="relative grid gap-[10px] md:gap-[15px]">
                      <li class="flex !list-disc flex-col flex-nowrap items-start gap-[2px]">
                        <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">1988</span>
                        <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
                          Ташкентский Государственный медицинский институт (лечебное дело)
                        </span>
                      </li>
                      <li class="flex !list-disc flex-col flex-nowrap items-start gap-[2px]">
                        <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">1988</span>
                        <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
                          Ташкентский Государственный медицинский институт (лечебное дело)
                        </span>
                      </li>
                      <li class="flex !list-disc flex-col flex-nowrap items-start gap-[2px]">
                        <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">1988</span>
                        <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
                          Ташкентский Государственный медицинский институт (лечебное дело)
                        </span>
                      </li>
                      <li class="flex !list-disc flex-col flex-nowrap items-start gap-[2px]">
                        <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">1988</span>
                        <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
                          Ташкентский Государственный медицинский институт (лечебное дело)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[20px] self-stretch border-t border-solid border-t-[#e7e7e7] pb-[20px] pt-[20px] md:pb-[25px] md:pt-[25px]"
                >
                  <div class="relative flex items-center justify-between self-stretch">
                    <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">
                      Опыт работы
                    </span>
                  </div>
                  <ul class="relative grid gap-[10px] md:gap-[15px]">
                    <li class="flex !list-disc flex-col flex-nowrap items-start gap-[2px]">
                      <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">1988</span>
                      <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
                        Ташкентский Государственный медицинский институт (лечебное дело)
                      </span>
                    </li>
                    <li class="flex !list-disc flex-col flex-nowrap items-start gap-[2px]">
                      <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">1988</span>
                      <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
                        Ташкентский Государственный медицинский институт (лечебное дело)
                      </span>
                    </li>
                    <li class="flex !list-disc flex-col flex-nowrap items-start gap-[2px]">
                      <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">1988</span>
                      <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
                        Ташкентский Государственный медицинский институт (лечебное дело)
                      </span>
                    </li>
                    <li class="flex !list-disc flex-col flex-nowrap items-start gap-[2px]">
                      <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">1988</span>
                      <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
                        Ташкентский Государственный медицинский институт (лечебное дело)
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[20px] self-stretch border-t border-solid border-t-[#e7e7e7] pb-[20px] pt-[20px] md:pb-[25px] md:pt-[25px]"
                >
                  <div class="relative flex items-center justify-between self-stretch">
                    <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">
                      Достижения
                    </span>
                  </div>
                  <ul class="relative grid gap-[10px] md:gap-[15px]">
                    <li class="flex !list-disc flex-col flex-nowrap items-start gap-[2px]">
                      <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">1988</span>
                      <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
                        Ташкентский Государственный медицинский институт (лечебное дело)
                      </span>
                    </li>
                    <li class="flex !list-disc flex-col flex-nowrap items-start gap-[2px]">
                      <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">1988</span>
                      <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
                        Ташкентский Государственный медицинский институт (лечебное дело)
                      </span>
                    </li>
                    <li class="flex !list-disc flex-col flex-nowrap items-start gap-[2px]">
                      <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">1988</span>
                      <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
                        Ташкентский Государственный медицинский институт (лечебное дело)
                      </span>
                    </li>
                    <li class="flex !list-disc flex-col flex-nowrap items-start gap-[2px]">
                      <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">1988</span>
                      <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
                        Ташкентский Государственный медицинский институт (лечебное дело)
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[20px] self-stretch border-t border-solid border-t-[#e7e7e7] pb-[20px] pt-[20px] md:pb-[25px] md:pt-[25px]"
                >
                  <div class="relative flex items-center justify-between self-stretch">
                    <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">
                      Сертификаты
                    </span>
                  </div>
                  <certificate-slider />
                </div>
                <div
                  class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[20px] self-stretch border-t border-solid border-t-[#e7e7e7] pb-[20px] pt-[20px] md:pb-[25px] md:pt-[25px]"
                >
                  <div class="relative flex items-center justify-between self-stretch">
                    <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">
                      Личное обращение
                    </span>
                  </div>
                  <div class="relative overflow-hidden rounded-[10px] bg-[#f0f4f1] p-[15px] md:p-[20px]">
                    <span class="text-mobile-subtitle-16 font-semibold text-[#63845c] md:text-subtitle-20">
                      Каждый человек уникален, и я убежден, что даже в самой сложной ситуации можно найти выход. В своей
                      работе я опираюсь на комплексный подход и верю в силы каждого пациента.
                    </span>
                  </div>
                </div>
                <div
                  class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[20px] self-stretch border-t border-solid border-t-[#e7e7e7] md:pt-[25px]"
                >
                  <div class="relative flex items-center justify-between self-stretch">
                    <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">
                      Видео-презентация
                    </span>
                  </div>
                  <div
                    class="relative h-[400px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/ghUH0Tioyo.png)] bg-cover bg-no-repeat"
                  ></div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </app-section>
    <review-grid />
    <home-course-grid />
    <div class="fixed bottom-0 left-0 right-0 z-30 bg-white px-4 py-[20px]">
      <ui-button class="w-full">Записаться</ui-button>
    </div>

    <review-modal />
  </div>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
import { HomeCourseGrid } from "~/features/home/ui"
import SpecialistyGrid from "~/widgets/specialisty/specialisty-grid.vue"
import CertificateSlider from "~/features/specialisty/ui/certificate-slider.vue"
import ReviewGrid from "~/widgets/specialisty/review-grid.vue"
import ReviewModal from "~/features/specialisty/ui/review-modal.vue"

const activeTab = ref("specialist")
</script>

<i18n>
{
  "ru": {
    "title": "Отзывы"
  },
  "uz": {
    "title": "Sharhlar"
  }
}
</i18n>
