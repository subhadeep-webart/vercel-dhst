"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { CirclePlus } from "lucide-react";
import Button from "@/components/ui/admin/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CldUploadWidget = dynamic(
  () => import("next-cloudinary").then((mod) => mod.CldUploadWidget),
  { ssr: false },
);

const CloudinaryUploader = ({
  onUpload,
  value,
  label = "Upload Image",
  multiple = false,
  resourceType = "auto",
  wrapperClass = "",
  accept = ["png", "jpeg", "jpg", "webp", "svg"],
  disabled,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        `w-full transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500 flex justify-center items-center relative h-[250px]`,
        wrapperClass,
      )}
    >
      {/* Preview */}
      {value && (
        <div className="mb-3">
          {resourceType === "video" ? (
            <video src={value} controls className="w-full rounded-lg" />
          ) : (
            <Image
              src={value}
              alt="uploaded"
              className="w-full rounded-lg object-contain"
              fill
            />
          )}
        </div>
      )}

      {!disabled && (
        <CldUploadWidget
          signatureEndpoint="/api/sign-image"
          uploadPreset="white-room-image"
          options={{
            multiple,
            clientAllowedFormats: accept,
            maxFileSize: 10485760,
            resourceType,
          }}
          onSuccess={(result) => {
            if (result.event === "success") {
              const url = result.info.secure_url;

              if (multiple) {
                onUpload((prev) => [...prev, url]);
              } else {
                onUpload(url);
              }
            }
          }}
        >
          {({ open }) => (
            <Button
              type="button"
              onClick={() => open()}
              className="w-fit absolute top-1/2 left-1/2 -translate-1/2 bg-white/90"
              variant="outline"
              size="sm"
              startIcon={<CirclePlus size={20} />}
              disabled={disabled}
            >
              {value ? "Change" : label}
            </Button>
          )}
        </CldUploadWidget>
      )}
    </div>
  );
};

export default CloudinaryUploader;
