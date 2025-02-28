import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";
import { CiHome } from "react-icons/ci";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    marginBottom: 10,
    padding: 10,
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  teamTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  teamMember: {
    fontSize: 12,
  },
  contact: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: "bold",
  },
});

const CopyrightPage = () => {
  const navigate = useNavigate(); // Correct way to use navigate inside a function component

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* PDF Viewer */}
      <PDFViewer width="100%" height="600px">
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>Copyright Notice</Text>
              <Text style={styles.text}>
                Copyright © {new Date().getFullYear()} Vanish. All rights reserved.
              </Text>
              <Text style={styles.text}>
                This website and its content, including but not limited to text, graphics, logos, and software, 
                are the property of Vanish and are protected by copyright laws. Unauthorized use, reproduction, 
                or distribution of any material from this website without prior written permission is strictly prohibited.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.teamTitle}>Team Members:</Text>
              <Text style={styles.teamMember}>• Soham Biswas</Text>
              <Text style={styles.teamMember}>• Sagnik Dutta</Text>
              <Text style={styles.teamMember}>• Saikat Sinchan Ghosh</Text>
              <Text style={styles.teamMember}>• Dhrupad Pal</Text>
              <Text style={styles.teamMember}>• Ananya Priya</Text>
              <Text style={styles.office}>Office Location: Kolkata, Newtown</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.text}>
                The images used on this website are for visual interest only and do not depict actual fire incidents or real-life safety situations.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.contact}>
                For permissions or inquiries, contact us at [Vanish@gmail.com] or visit our page.
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>

      {/* Navigation Button (Placed Outside PDF Viewer) */}
      <button className="flex flex-row items-center  "
        onClick={() => navigate("/home")} // Change "/home" to your target route
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
       <CiHome /> Go to Home
      </button>
    </div>
  );
};

export default CopyrightPage;
